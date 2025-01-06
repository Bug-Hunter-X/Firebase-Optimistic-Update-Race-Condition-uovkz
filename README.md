# Firebase Optimistic Update Race Condition

This repository demonstrates a potential race condition when using optimistic updates with Firebase Firestore.  When multiple clients update the same document concurrently, optimistic updates can lead to data inconsistencies and unexpected behavior in the UI. This example shows how a seemingly simple increment operation can result in flickering or unexpected data. The solution demonstrates a more robust approach to handling concurrent updates.

## Steps to Reproduce

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`
4. Observe the console and the UI for data inconsistencies.