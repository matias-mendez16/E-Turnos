/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Consultorio } from './consultorio.entity';

@Entity()
export class HorarioDisponible {
  @PrimaryGeneratedColumn()
  id_horario: number;

  @ManyToOne(() => Doctor, doctor => doctor.horarios, { onDelete: 'CASCADE' })
  doctor: Doctor;

  @ManyToOne(() => Consultorio, consultorio => consultorio.horarios)
  consultorio: Consultorio;

  @Column({ type: 'enum', enum: ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'] })
  dia_semana: string;

  @Column({ type: 'time' })
  hora_inicio: string;

  @Column({ type: 'time' })
  hora_fin: string;

  @Column({ default: 30 })
  duracion_turno: number;
}