/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { HorarioDisponible } from './horario_disponible.entity';
import { Turno } from './turno.entity';
import { Especialidad } from './especialidad.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id_doctor: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ length: 15 })
  telefono: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ unique: true, length: 20 })
  matricula: string;

  @Column({ default: true })
  activo: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;

  @OneToMany(() => HorarioDisponible, hd => hd.doctor)
  horarios: HorarioDisponible[];

  @OneToMany(() => Turno, turno => turno.doctor)
  turnos: Turno[];

  @ManyToMany(() => Especialidad, especialidad => especialidad.doctores)
  especialidades: Especialidad[];
}
