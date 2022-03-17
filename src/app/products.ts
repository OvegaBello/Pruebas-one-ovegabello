export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    clase: 'higth',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    clase: 'higth',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    clase: 'low',
  },
  {
    id: 4,
    name: 'product T-Shirt One',
    price: 300,
    description: 'Este es el cuarto producto',
    clase: 'medium',
  },
  {
    id: 5,
    name: 'product T-Shirt Two',
    price: 301,
    description: 'Este es el Quinto producto',
    clase: 'medium',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
