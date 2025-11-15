/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Paciente } from './paciente.entity';

@Entity()
export class ObraSocial {
  @PrimaryColumn({ length: 6 })
  codigo: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 15 })
  telefono: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ default: true })
  activa: boolean;

  @OneToMany(() => Paciente, paciente => paciente.obraSocial)
  pacientes: Paciente[];
}