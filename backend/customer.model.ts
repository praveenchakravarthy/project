import {Entity, model, property} from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  userid: number;

  @property({
    type: 'string',
  })
  Name?: string;

  @property({
    type: 'string',
  })
  Email?: string;

  @property({
    type: 'number',
  })
  ContactNum?: number;

  @property({
    type: 'string',
  })
  Address?: string;


  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
