/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HorarioDisponible } from './horario_disponible.entity';
import { Turno } from './turno.entity';

@Entity()
export class Consultorio {
  @PrimaryGeneratedColumn()
  id_consultorio: number;

  @Column({ length: 20 })
  nombre: string;

  @Column({ default: true })
  activo: boolean;

  @OneToMany(() => HorarioDisponible, hd => hd.consultorio)
  horarios: HorarioDisponible[];

  @OneToMany(() => Turno, turno => turno.consultorio)
  turnos: Turno[];
}