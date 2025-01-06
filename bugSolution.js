To address this issue, utilize server-side timestamps or transaction operations within Firestore.  Transactions ensure atomicity, preventing conflicting updates. Using server-side timestamps provides consistency and removes the risk of race conditions related to optimistic updates.

```javascript
db.collection('documents').doc('myDoc').update({count: firebase.firestore.FieldValue.increment(1)})
.then(() => {
  // UI update happens after server write ensures consistency
  // ...
}).catch(error => {
  console.error('Error updating document:', error);
});
```

Alternatively, implement a transaction to ensure atomicity:

```javascript
db.runTransaction(transaction => {
  return transaction.get(db.collection('documents').doc('myDoc'))
  .then(doc => {
    let newCount = (doc.data().count || 0) + 1;
    transaction.update(db.collection('documents').doc('myDoc'), { count: newCount });
  });
}).then(() => {
  // UI update after successful transaction
}).catch(error => {
  console.error('Transaction failed:', error);
});
```