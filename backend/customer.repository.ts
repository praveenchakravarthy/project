import {DefaultCrudRepository} from '@loopback/repository';
import {Customer, CustomerRelations} from '../models';
import {CustomerdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {
  constructor(
    @inject('datasources.customerdb') dataSource: CustomerdbDataSource,
  ) {
    super(Customer, dataSource);
  }
}
