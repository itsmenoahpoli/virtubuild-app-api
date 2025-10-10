import { laboratoriesRepository } from "@/database";

export const seedLaboratories = async () => {
  console.log("🌱 Seeding laboratories...");
  
  const existingLaboratories = await laboratoriesRepository.find();
  
  if (existingLaboratories.length > 0) {
    console.log("✅ Laboratories already exist, skipping...");
    return;
  }

  const laboratories = [
    {
      name: "Introduction to Tools and Components Laboratory",
      description: "Module 1: Introduction to tools/components (e.g., screwdrivers, CPUs). Learn to identify tools and sort PC components.",
      location: "Lab Room 101",
      capacity: "20 students",
      equipment: {
        tools: ["Screwdrivers", "Anti-static wrist straps", "Component trays"],
        components: ["CPUs", "RAM modules", "Motherboards", "Storage devices", "Power supplies"],
        workstations: 10
      },
      isEnabled: true
    },
    {
      name: "Desktop/Laptop Assembly Laboratory",
      description: "Module 2: Desktop/laptop/motherboard assembly (includes UEFI interface simulation). Learn storage media, monitor connection, and UEFI interface.",
      location: "Lab Room 102",
      capacity: "16 students",
      equipment: {
        tools: ["Screwdrivers", "Cable management tools", "Anti-static mats"],
        components: ["Complete desktop PCs", "Laptops", "Monitors", "Storage media", "Cables"],
        workstations: 8,
        simulation: "UEFI Interface Simulator"
      },
      isEnabled: true
    },
    {
      name: "Advanced PC Assembly Laboratory",
      description: "Module 3: Advanced tasks (e.g., processor installation, power systems). Master motherboard assembly, CPU installation, and power systems.",
      location: "Lab Room 103",
      capacity: "12 students",
      equipment: {
        tools: ["Precision screwdrivers", "Thermal paste applicators", "Cable testers"],
        components: ["High-end motherboards", "Latest CPUs", "DDR4/DDR5 RAM", "NVMe SSDs", "Modular PSUs"],
        workstations: 6,
        simulation: "Advanced Assembly Simulator"
      },
      isEnabled: true
    }
  ];

  for (const labData of laboratories) {
    const laboratory = laboratoriesRepository.create(labData);
    await laboratoriesRepository.save(laboratory);
    console.log(`✅ Created laboratory: ${labData.name}`);
  }

  console.log("✅ Laboratories created successfully");
};
