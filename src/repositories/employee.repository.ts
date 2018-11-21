import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Employee} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Employee, dataSource);
  }
}
