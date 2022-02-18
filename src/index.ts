import * as Automerge from 'automerge';
import {CardDocument} from "./cardDocument";

let doc1 = Automerge.from<CardDocument>({cards: []});

doc1 = Automerge.change(doc1, 'Add Card', doc => {
    doc.cards.push({title: 'Item 1', done: false});
    doc.cards.push({title: 'Item 2', done: false});
});

let doc2 = Automerge.init<CardDocument>();
doc2 = Automerge.merge(doc2, doc1);

doc2 = Automerge.change(doc2, 'Add Card', doc => {
    doc.cards.push({title: 'Item 2', done: false});
    doc.cards.push({title: 'Item 3', done: false});
});

console.log('doc1', doc1);
console.log('doc2', doc2);

let finalDoc = Automerge.merge(doc1, doc2);

console.log('finalDoc', finalDoc);

const history = Automerge.getHistory(finalDoc);

console.log('history', history);

const file = Automerge.save(finalDoc);

console.log('file', file);
