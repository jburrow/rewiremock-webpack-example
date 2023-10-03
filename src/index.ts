import { rewiremock } from "./initRewiremock";

rewiremock("./calculator").with({
    add: (x, y) => {
        console.log('[mocked]');
        return 1;
    }
});

// import { add } from "./calculator";

console.log('[index.ts] [module]', module);

export const greet = async () => {
    const calculator = await import('./calculator');

    console.log('[index.ts] [greet] invoked');
    const e = document.createElement('h1');
    e.innerText = `${calculator.add(5, 5)}`;
    document.body.appendChild(e)

    return null;
}

greet();