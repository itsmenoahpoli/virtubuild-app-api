import { assessmentsRepository, laboratoriesRepository } from "@/database";

export const seedAssessments = async () => {
  console.log("Seeding assessments...");
  
  const laboratories = await laboratoriesRepository.find();
  
  const assessments = [
    {
      laboratoryName: "Introduction to Tools and Components Laboratory",
      title: "Tool Identification Assessment",
      description: "Identify and name the tools commonly used in PC assembly and maintenance.",
      timeLimitMinutes: 30,
      questions: [
        {
          id: 1,
          question: "Which tool is essential for removing screws from a computer case?",
          type: "multiple_choice",
          options: ["Hammer", "Screwdriver", "Wrench", "Pliers"],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 2,
          question: "What is the primary purpose of an anti-static wrist strap?",
          type: "multiple_choice",
          options: [
            "To hold components in place",
            "To prevent electrostatic discharge",
            "To tighten screws",
            "To cut cables"
          ],
          correctAnswer: 1,
          points: 10
        },
        {
          id: 3,
          question: "Which of the following is NOT a type of screwdriver commonly used in PC assembly?",
          type: "multiple_choice",
          options: ["Phillips", "Flathead", "Torx", "Sledgehammer"],
          correctAnswer: 3,
          points: 10
        }
      ],
      isEnabled: true
    },
    {
      laboratoryName: "Introduction to Tools and Components Laboratory",
      title: "PC Component Sorting Assessment",
      description: "Sort and categorize PC components based on their function and characteristics.",
      timeLimitMinutes: 25,
      questions: [
        {
          id: 1,
          question: "Which component is responsible for processing data in a computer?",
          type: "multiple_choice",
          options: ["RAM", "CPU", "Storage", "Power Supply"],
          correctAnswer: 1,
          points: 15
        },
        {
          id: 2,
          question: "What is the main function of RAM in a computer system?",
          type: "multiple_choice",
          options: [
            "Long-term storage",
            "Temporary data storage",
            "Power regulation",
            "Data processing"
          ],
          correctAnswer: 1,
          points: 15
        }
      ],
      isEnabled: true
    },
    {
      laboratoryName: "Desktop/Laptop Assembly Laboratory",
      title: "Storage Media Installation Assessment",
      description: "Demonstrate knowledge of storage media types and installation procedures.",
      timeLimitMinutes: 35,
      questions: [
        {
          id: 1,
          question: "What is the correct procedure for installing an SSD in a desktop PC?",
          type: "multiple_choice",
          options: [
            "Connect power and data cables, then secure in bay",
            "Secure in bay first, then connect cables",
            "Only connect power cable",
            "Install without securing"
          ],
          correctAnswer: 0,
          points: 20
        },
        {
          id: 2,
          question: "Which interface is commonly used for connecting modern SSDs?",
          type: "multiple_choice",
          options: ["SATA", "PATA", "NVMe", "Both SATA and NVMe"],
          correctAnswer: 3,
          points: 20
        }
      ],
      isEnabled: true
    },
    {
      laboratoryName: "Desktop/Laptop Assembly Laboratory",
      title: "Monitor Connection and UEFI Interface Assessment",
      description: "Test knowledge of monitor connections and UEFI interface navigation.",
      timeLimitMinutes: 40,
      questions: [
        {
          id: 1,
          question: "Which cable type provides the best video quality for modern monitors?",
          type: "multiple_choice",
          options: ["VGA", "HDMI", "DVI", "Composite"],
          correctAnswer: 1,
          points: 15
        },
        {
          id: 2,
          question: "What does UEFI stand for?",
          type: "multiple_choice",
          options: [
            "Unified Extensible Firmware Interface",
            "Universal Electronic Firmware Interface",
            "Unified Electronic Firmware Interface",
            "Universal Extensible Firmware Interface"
          ],
          correctAnswer: 0,
          points: 15
        }
      ],
      isEnabled: true
    },
    {
      laboratoryName: "Advanced PC Assembly Laboratory",
      title: "Advanced Motherboard and CPU Installation Assessment",
      description: "Demonstrate advanced skills in motherboard preparation and CPU installation procedures.",
      timeLimitMinutes: 45,
      questions: [
        {
          id: 1,
          question: "What is the correct order for installing a CPU?",
          type: "multiple_choice",
          options: [
            "Lift socket lever, align CPU, lower lever",
            "Force CPU into socket",
            "Apply thermal paste first",
            "Install cooler first"
          ],
          correctAnswer: 0,
          points: 25
        },
        {
          id: 2,
          question: "What is the purpose of thermal paste?",
          type: "multiple_choice",
          options: [
            "To hold the CPU in place",
            "To improve heat transfer between CPU and cooler",
            "To prevent static electricity",
            "To make the CPU faster"
          ],
          correctAnswer: 1,
          points: 25
        }
      ],
      isEnabled: true
    },
    {
      laboratoryName: "Advanced PC Assembly Laboratory",
      title: "Power Systems and Boot Process Assessment",
      description: "Test understanding of power supply connections and system boot procedures.",
      timeLimitMinutes: 35,
      questions: [
        {
          id: 1,
          question: "What is the most important consideration when selecting a power supply?",
          type: "multiple_choice",
          options: [
            "Color",
            "Wattage rating",
            "Brand name",
            "Size"
          ],
          correctAnswer: 1,
          points: 20
        },
        {
          id: 2,
          question: "Which connector powers the motherboard?",
          type: "multiple_choice",
          options: ["24-pin ATX", "8-pin EPS", "6-pin PCIe", "4-pin Molex"],
          correctAnswer: 0,
          points: 20
        }
      ],
      isEnabled: true
    }
  ];

  for (const assessmentData of assessments) {
    const laboratory = laboratories.find(la => la.name === assessmentData.laboratoryName);
    if (laboratory) {
      const exists = await assessmentsRepository.findOneBy({ laboratoryId: laboratory.id });
      if (!exists) {
        const assessment = assessmentsRepository.create({
          laboratoryId: laboratory.id,
          title: assessmentData.title,
          description: assessmentData.description,
          timeLimitMinutes: assessmentData.timeLimitMinutes,
          questions: assessmentData.questions,
          isEnabled: assessmentData.isEnabled
        });
        await assessmentsRepository.save(assessment);
        console.log(`Created assessment: ${assessmentData.title} for laboratory: ${laboratory.name}`);
      } else {
        console.log(`Assessment already exists: ${assessmentData.title}`);
      }
    }
  }
};
