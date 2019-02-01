import { ErrorOptions } from '../interfaces/errors.interface';

export const toArray = (value: ErrorOptions): string[] =>
  Array.isArray(value) ? value : [value];
