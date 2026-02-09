[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/be_2yLDO)
# Homework 3: Echo ChatBot Reflection

## How many hours did you spend working on this homework?

About 4 hours.

## What challenges/roadblocks did you face during this homework?

The main challenge was working with TypeScript's strict mode settings (like `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`). The `verbatimModuleSyntax`, when together with `moduleDetection: "force"` required adding `export {}` at the top of the script file so that TypeScript would treat it as a module. Also, handling DOM element types properly required type assertions and null-checking because that actually `document.querySelector` returns `T | null` under strict mode.

## Did you use AI/LLM tools for this assignment? If so, please provide a transcript or document your usage extensively below. If you did use AI, please explain why you decided to use AI for the task you used it for, what you learned from the AI responses, and explain any relevant unfamiliar terms and concepts that the AI responses generated.

Yes, I used AI to ask for help and knowledge for this assignment. The AI helped with understanding TypeScript DOM types and strict mode constraints, and also asked for the typical color settings for tasks like this. Some of the key concepts I learned include using generic type parameters with `document.querySelector<T>()` for type-safe DOM queries and how `verbatimModuleSyntax` affects module detection in TypeScript.