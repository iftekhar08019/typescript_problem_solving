## TypeScript (বাংলা ব্লগ)

ইন্টারভিউ প্রস্তুতির সময় সামান্য ধারণাও বড় ভূমিকা রাখে। নিচে দুটি জনপ্রিয় TypeScript প্রশ্নের উত্তর বাংলা ভাষায় সংক্ষিপ্তভাবে তুলে ধরা হলো।

### ১. Interface বনাম Type Alias — পার্থক্য কী?

- **Declaration ও পুনঃব্যবহার**: `interface` একই নামে একাধিকবার ঘোষণা করে স্বয়ংক্রিয়ভাবে মার্জ করা যায়, কিন্তু `type` একই নামে দ্বিতীয়বার ঘোষণা করলে কম্পাইলার ত্রুটি দেয়। বড় কোডবেসে একাধিক টিম একই ইন্টারফেসে ফিচার যোগ করলে এটি খুব কাজে লাগে।
- **Extend করার ধরন**: `interface` শুধুমাত্র `extends` কীওয়ার্ডে নির্ভরশীল, অন্যদিকে `type` union (`|`) এবং intersection (`&`) এর মাধ্যমে আরও নমনীয়ভাবে গঠন বদলাতে পারে।
- **Primitives ও utility**: `type` দিয়ে `string | number` বা utility টাইপ তৈরি করা সহজ, কিন্তু `interface` শুধুমাত্র অবজেক্ট-আধারিত কাঠামোর জন্য উপযুক্ত।
- **Implementation**: ক্লাস থেকে `implements` ব্যবহার করার ক্ষেত্রে দুইটিকেই ব্যবহার করা যায়। তবে পাবলিক এপিআই প্রকাশ করতে হলে `interface` ডকুমেন্টেশনের সুবিধা এবং declaration merging থাকার কারণে বেশি জনপ্রিয়।

```ts
interface User {
  id: number;
}

interface User {
  email: string;
}
// User এখন { id: number; email: string; }

type Result = string | number;
// Result কে আবার ঘোষণা করা যাবে না
```

### ২. `keyof` কেন ব্যবহার করি?

`keyof` টাইপ অপারেটর কোনো অবজেক্ট টাইপের সব কীগুলোর union রিটার্ন করে। এটি জেনেরিক ফাংশন বা টাইপ-সেফ ইউটিলিটি তৈরিতে দারুণ কাজে লাগে, কারণ ভুল কী ব্যবহারের সুযোগ থাকে না।

```ts
type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const myBook: Book = { title: 'Gatsby', author: 'Fitzgerald', publishedYear: 1925 };

const title = getValue(myBook, 'title');        // টাইপ: string
// const wrong = getValue(myBook, 'price');     // ত্রুটি: 'price' Book-এর কী নয়
```

উপরে `K extends keyof T` শর্তের কারণে `key` প্যারামিটার কেবলমাত্র বৈধ কীগুলোই গ্রহণ করবে। ফলস্বরূপ ফাংশনটি কম্পাইল-টাইমেই ভুল ধরতে পারে এবং `T[K]` রিটার্ন টাইপও নির্ভুল থাকে।


