import { 
    Effect, 
    pipe
} from 'effect';

console.log(
    "Hello Effect"
);

const myFirstEffect = Effect.succeed(
    42
);

// const mySecondEffect = Effect.fail(
//     new Error("Effect failed")
// );

const result = Effect.runSync(
    pipe(
        myFirstEffect
        // , mySecondEffect
    )
);

// const result2 = Effect.runSync(
//     mySecondEffect
// );

console.log(
    result
    // , result2
)