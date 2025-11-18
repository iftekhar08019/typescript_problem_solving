function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
  // TypeScript should know all cases are covered, but adding a default for safety
  return value;
}

// Sample Input:
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
