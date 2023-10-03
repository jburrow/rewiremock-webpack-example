import { extra } from "./calc-dep";
const m = module;

export const add = (a: number, b: number) => {
    console.log('[calculator.ts]', m);
    return a + b + extra()
};