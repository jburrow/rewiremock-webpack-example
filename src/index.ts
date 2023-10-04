import { rewiremock } from "./initRewiremock";

rewiremock("./src/calculator.ts").with({

    add: (x, y) => {
        console.log('[mocked]');
        return 1;
    }
}
);

console.log('[index.ts] [module] mock-initialized', module.id, module);

import { add } from "./calculator";



export const greet = async () => {
    console.log('[index.ts] [greet] invoked');
    const e = document.createElement('h1');
    e.innerText = `${add(5, 5)}`;
    document.body.appendChild(e)

    return null;
}

greet();