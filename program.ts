import { 
    Effect 
} from 'effect';

console.log(
    "Hello Effect"
);

const myFirstEffect = Effect.succeed(
    42
);

const result = Effect.runSync(
    myFirstEffect
);

console.log(
    result
)