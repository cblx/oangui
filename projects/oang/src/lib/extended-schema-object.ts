import { SchemaObject } from 'openapi3-ts';
export interface ExtendedSchemaObject extends SchemaObject{
    'x-displayName'?: string;
    'x-isRequired'?:boolean;
    'x-placeholder'?:string;
    'x-validationMessages'?: { [key: string]: string };
}