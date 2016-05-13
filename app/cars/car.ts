/* Defines the product entity */
export interface ICar {
    ownerUser: any;
    ownerShop: any;
    brand: string;
    manufacturer: string;
    sellingPrice: string;
    rentPrice: string;
    color: string;
    seatNumber: string;
    imageUrl: string;
    engineVolume: string;
    transmission: string;
    rented: number;
    id: number;
}