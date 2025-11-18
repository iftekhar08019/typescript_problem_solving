function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
  return value;
}



function getLength(value: string | unknown[]): number {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface RatedItem {
  title: string;
  rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter(item => item.rating >= 4);
}

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const available = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`);
}

function getUniqueValues(array1: (string | number)[], array2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];
  
  // Helper function to check if a value already exists in result array
  const isValueInArray = (value: string | number, arr: (string | number)[]): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  };
  
  // Add values from first array
  for (let i = 0; i < array1.length; i++) {
    if (!isValueInArray(array1[i], result)) {
      result[result.length] = array1[i];
    }
  }
  
  // Add values from second array
  for (let i = 0; i < array2.length; i++) {
    if (!isValueInArray(array2[i], result)) {
      result[result.length] = array2[i];
    }
  }
  
  return result;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products
    .map(product => {
      const baseTotal = product.price * product.quantity;
      if (typeof product.discount === 'number' && product.discount > 0) {
        const discountFraction = product.discount / 100;
        const discountAmount = baseTotal * discountFraction;
        return baseTotal - discountAmount;
      }
      return baseTotal;
    })
    .reduce((total, productTotal) => total + productTotal, 0);
}





