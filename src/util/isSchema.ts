import type { ISchema } from '../types';

const isSchema = (obj: any): obj is ISchema<any> => obj && obj.__isTrivaliSchema__;

export default isSchema;
