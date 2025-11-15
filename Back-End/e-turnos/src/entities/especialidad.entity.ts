/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Doctor } from './doctor.entity';

@Entity()
export class Especialidad {
  @PrimaryGeneratedColumn()
  id_especialidad: number;

  @Column({ length: 50 })
  nombre_especialidad: string;

  @ManyToMany(() => Doctor, doctor => doctor.especialidades)
  doctores: Doctor[];
}
