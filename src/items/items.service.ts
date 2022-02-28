import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {

    private readonly items: Item[] = [
        {
            id: "34343434",
            name: "Item One",
            "qty": 100,
            description: "This is Item one (services)"
        },
        {
            id: "14141414",
            name: "Item Two",
            "qty": 100,
            description: "This is Item Two (services)"
        },
        {
            id: "15151515",
            name: "Item Three",
            "qty": 100,
            description: "This is Item Three (services)"
        }
    ];

    findAll(): Item[] {
        return this.items;
    }
}
