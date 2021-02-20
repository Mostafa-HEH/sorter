import { NumbersCollections } from "./NumbersCollections";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./linkedList";

//to run Sorter;

// with numbers;
const numbersCollections = new NumbersCollections([50, 3, -5, 0]);
numbersCollections.sort();
console.log(numbersCollections.data);

// with characters;
const charactersCollection = new CharactersCollection("moSTAfa");
charactersCollection.sort();
console.log(charactersCollection.data);

// with linked list;
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-2);
linkedList.add(4);
linkedList.sort();
linkedList.print();
