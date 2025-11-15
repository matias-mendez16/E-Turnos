/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Paciente } from './paciente.entity';
import { Doctor } from './doctor.entity';
import { Consultorio } from './consultorio.entity';

@Entity()
export class Turno {
  @PrimaryGeneratedColumn()
  id_turno: number;

  @ManyToOne(() => Paciente, paciente => paciente.turnos)
  paciente: Paciente;

  @ManyToOne(() => Doctor, doctor => doctor.turnos)
  doctor: Doctor;

  @ManyToOne(() => Consultorio, consultorio => consultorio.turnos)
  consultorio: Consultorio;

  @Column({ type: 'datetime' })
  fecha_hora: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_solicitud: Date;

  @Column({ default: 30 })
  duracion_minutos: number;

  @Column({ type: 'enum', enum: ['pendiente','confirmado','completado','cancelado'] })
  estado: string;
}