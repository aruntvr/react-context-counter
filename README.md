# React Context Counter

This repository is a small React counter built with the Context API and useReducer.

Improvements made:

- Added support for variable step increments/decrements.
- Added `reset` and `set` actions to the reducer.
- Persist counter value to `localStorage` (via `CounterProvider`).
- Added `useCounter` hook to encapsulate useContext usage and provide helper functions.
- Memoized the provider value to reduce unnecessary re-renders.
- Upgraded UI with accessible labels and `aria-live` on the counter value.

How to use:

- Start the dev server:

```bash
pnpm install
pnpm run dev
```

- `CounterProvider` accepts `initialValue` prop if you want to start with a custom number.

- Use `useCounter()` in components to access the counter and helper methods:

```jsx
const { counter, increase, decrease, reset, set } = useCounter();
```

Next improvements you could add:

- Move to TypeScript and add types for actions and state.
- Add unit tests for reducer and components using Vitest/Jest.
- Split context into state and dispatch contexts to reduce re-renders further.
- Add animations and improved styling.
- Add e2e tests and CI.

