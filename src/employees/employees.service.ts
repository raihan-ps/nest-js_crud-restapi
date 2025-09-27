import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';


@Injectable()
export class EmployeesService {

constructor(
  @InjectModel(Employee.name) private readonly EmployeeModel: Model<Employee>,
) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    const employee = new this.EmployeeModel(createEmployeeDto);
    return employee.save();
  }

  findAll() {
    return this.EmployeeModel.find().exec();
  }

  async findOne(id: string) {
    const employee = await this.EmployeeModel.findOne({_id: id}).exec();

        if(!employee) throw new NotFoundException('Employee not found');
        return employee;
  }

  async update(id: string, updateEmployeeDto: any) {
    const existingEmployee = await this.EmployeeModel.findOneAndUpdate({_id: id}, {$set: updateEmployeeDto}, {new: true}).exec();

    if(!existingEmployee){
      throw new NotFoundException(`Employee #${id} not found`);
    }

    return existingEmployee;
  }

  async remove(id: string) {
    const employee = await this.EmployeeModel.findOneAndDelete({ _id: id }).exec();
    if (!employee) {
      throw new NotFoundException(`Employee #${id} not found`);
    }
    return employee;
  }
}
