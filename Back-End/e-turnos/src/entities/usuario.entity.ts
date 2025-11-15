/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryColumn()
  id_usuario: number;

  @Column({ type: 'enum', enum: ['administrador','doctor','paciente'] })
  rol: string;
}