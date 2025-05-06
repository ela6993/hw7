export type StringTransformer = (input: string) => string;

export type StringNumberTransformer = (input: string, count: number) => string;

// Интерфейс утилит
export interface StringUtils {
  capitalize: StringTransformer;
  trim: StringTransformer;
  repeat: StringNumberTransformer;
  toSnakeCase: StringTransformer;
  toUpperCase: StringTransformer;
  toLowerCase: StringTransformer;
  isEmpty: (input: string) => boolean;
  reverseString: StringTransformer;
  truncate: StringNumberTransformer;
  removeSpaces: StringTransformer;
  countWords: (input: string) => number;
  startsWith: (input: string, start: string) => boolean;
  endsWith: (input: string, end: string) => boolean;
  replaceAll: (input: string, search: string, replacement: string) => string;
}
