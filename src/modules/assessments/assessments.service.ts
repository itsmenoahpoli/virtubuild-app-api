import { assessmentsRepository } from "@/database";

export class AssessmentsService {
	public async getByLaboratory(laboratoryId: number) {
		return assessmentsRepository.find({ where: { laboratoryId } });
	}

	public async create(laboratoryId: number, assessmentData: any) {
		const created = assessmentsRepository.create({
			laboratoryId,
			...assessmentData,
			isEnabled: true
		});
		return assessmentsRepository.save(created);
	}

	public async update(id: number, assessmentData: any) {
		await assessmentsRepository.update(id, assessmentData);
		return assessmentsRepository.findOneBy({ id });
	}

	public async delete(id: number) {
		return assessmentsRepository.delete(id);
	}

	public async getById(id: number) {
		return assessmentsRepository.findOneBy({ id });
	}
}


