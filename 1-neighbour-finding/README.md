# Neighbor Finding

## Context

One webpage is composed using multiple carousels, one below the other. But the user can only seen one element at a time (shown in red). Also, each carousel first element is its cover element (shown in black).

To reduce server load and optimize performance and bandwidth, this webpage do not load all elements at once. It builds the pages skeleton, detects the element being viewed by the user (shown in red) and then finds its neighbors. Requesting only them (shown in darker colors).

### Case 1
![tile](./pictures/1.svg)

### Case 2
The user can navigate up, down, left and right. But only one card at a time. So, if the user move one element down, it would look so:

![tile](./pictures/2.svg)

### Case 3
Then, if he moves two steps right, it would look like so:

![tile](./pictures/3.svg)

### Case 4
But when he moves one step down again, watch that the previously active carousel continues at its current state, with the last seen card still at its last position.

![tile](./pictures/4.svg)

### Case 5
So, if the user moves two steps down and one right, then one up again, it would result in the following:

![tile](./pictures/5.svg)

## Exercise

Please, design the algorithm that detects the neighbors. Do not care about double loading elements, another application layer caches them. Make your code pass all the unit tests in this folder, using ```npm test``` 
```typescript
function findNeighbors(skeleton: Skeleton, cardIdActive: UUIDv4): UUIDv4[] {
    // code here
}
```
