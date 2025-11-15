/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ObraSocial } from './obra_social.entity';
import { Turno } from './turno.entity';

@Entity()
export class Paciente {
  @PrimaryColumn({ length: 9 })
  dni_paciente: string;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column({ type: 'text', nullable: true })
  direccion: string;

  @Column({ length: 15 })
  telefono: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;

  @Column({ default: true })
  activo: boolean;

  @ManyToOne(() => ObraSocial, os => os.pacientes)
  obraSocial: ObraSocial;

  @Column({ nullable: true })
  numero_afiliado: string;

  @OneToMany(() => Turno, turno => turno.paciente)
  turnos: Turno[];
}