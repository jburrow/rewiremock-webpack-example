import { extra } from "./calc-dep";

console.log('[calculator.ts] [module]', module.id);


export const add = (a: number, b: number) => {
    console.log('[calculator.ts] [add]', module.id);
    return a + b + extra()
};