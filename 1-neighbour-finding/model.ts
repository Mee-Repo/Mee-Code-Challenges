export type UUIDv4 = string;

export interface Card {
    order: number;
}

export interface Trail {
    order: number;
}

export interface Skeleton {
    trails: {
        [index: string]: Trail;
    };
    cards: {
        [index: string]: Card;
    };
}