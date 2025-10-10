import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DateFieldsEntity } from "./shared.entity";
import { Assessment } from "./assessment.entity";

@Entity()
export class Laboratory extends DateFieldsEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({ type: "text", nullable: true })
	description?: string;

	@Column({ type: "varchar", length: 100, nullable: true })
	location?: string;

	@Column({ type: "varchar", length: 50, nullable: true })
	capacity?: string;

	@Column({ type: "jsonb", nullable: true })
	equipment?: any;

	@Column({ type: "boolean", default: true })
	isEnabled: boolean;

	@OneToMany(() => Assessment, assessment => assessment.laboratory)
	assessments?: Assessment[];
}
