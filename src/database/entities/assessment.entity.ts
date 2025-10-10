import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { DateFieldsEntity } from "./shared.entity";
import { Laboratory } from "./laboratory.entity";
import { AssessmentSubmission } from "./assessment-submission.entity";

@Entity()
export class Assessment extends DateFieldsEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	laboratoryId: number;

	@Column()
	title: string;

	@Column({ type: "text", nullable: true })
	description?: string;

	@Column({ type: "int", default: 30 })
	timeLimitMinutes: number;

	@Column({ type: "jsonb" })
	questions: any;

	@Column({ type: "boolean", default: true })
	isEnabled: boolean;

	@ManyToOne(() => Laboratory)
	@JoinColumn({ name: 'laboratoryId' })
	laboratory?: Laboratory;

	@OneToMany(() => AssessmentSubmission, submission => submission.assessment)
	assessmentSubmissions?: AssessmentSubmission[];
}


