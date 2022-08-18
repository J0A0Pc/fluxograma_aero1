import { ClassItem } from "@/interfaces/classes";

const classes = [
  [
    {
      name: "Algoritmo e Programação de Computadores",
      code: "FACOM49010",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Cálculo Diferencial e Integral I",
      code: "FAMAT49010",
      classHrs: 90,
      labHrs: 0,
      totalHrs: 90,
    },
    {
      name: "Desenho Técnico",
      code: "FEMEC41011",
      classHrs: 45,
      labHrs: 0,
      totalHrs: 45,
    },
    {
      name: "Fundamentos de Aeronáutica I",
      code: "FEMEC43012",
      classHrs: 30,
      labHrs: 0,
      totalHrs: 30,
    },
    {
      name: "Geometria Analítica",
      code: "FAMAT49011",
      classHrs: 75,
      labHrs: 0,
      totalHrs: 75,
    },
    {
      name: "Introdução à Engenharia Aeronáutica",
      code: "FEMEC43011",
      classHrs: 45,
      labHrs: 0,
      totalHrs: 45,
    },
    {
      name: "Química Básica",
      code: "IQUFU49011",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
  ],
  [
    {
      name: "Algebra Linear",
      code: "FAMAT49022",
      classHrs: 45,
      labHrs: 0,
      totalHrs: 45,
    },
    {
      name: "Cálculo Diferencial e Integral II",
      code: "FAMAT49020",
      requirementCode: "FAMAT49010",
      classHrs: 90,
      labHrs: 0,
      totalHrs: 90,
    },
    {
      name: "Desenho de Máquinas",
      code: "FEMEC41021",
      requirementCode: "FEMEC41011",
      classHrs: 30,
      labHrs: 30,
      totalHrs: 60,
    },
    {
      name: "Estatística",
      code: "FAMAT49021",
      classHrs: 60,
      labHrs: 0,
      totalHrs: 60,
    },
    {
      name: "Física Geral I",
      code: "INFIS49020",
      classHrs: 45,
      labHrs: 0,
      totalHrs: 45,
    },
    {
      name: "Física Experimental I",
      code: "INFIS49021",
      classHrs: 0,
      labHrs: 30,
      totalHrs: 30,
    },
    {
      name: "Programação Aplicada à Engenharia",
      code: "FEMEC41020",
      classHrs: 0,
      labHrs: 30,
      totalHrs: 30,
    },
    {
      name: "Fundamentos de Aeronáutica II",
      code: "FEMEC43021",
      requirementCode: "FEMEC43012",
      classHrs: 0,
      labHrs: 30,
      totalHrs: 30,
    },
  ],
  [
    {
      name: "Cálculo Diferencial e Integral III",
      code: "FAMAT49030",
      requirementCode: "FAMAT49020",
      classHrs: 90,
      labHrs: 0,
      totalHrs: 90,
    },
    {
      name: "Cinemática",
      code: "FEMEC41030",
      requirementCode: "INFIS49020",
      classHrs: 45,
      labHrs: 0,
      totalHrs: 45,
    },
    {
      name: "Estática",
      code: "INFIS49032",
      requirementCode: "INFIS49020",
      classHrs: 60,
      labHrs: 0,
      totalHrs: 60,
    },
    {
      name: "Física Geral II",
      code: "INFIS49030",
      requirementCode: "FAMAT49020",
      classHrs: 90,
      labHrs: 0,
      totalHrs: 90,
    },
    {
      name: "Física Experimental II",
      code: "INFIS49031",
      classHrs: 0,
      labHrs: 30,
      totalHrs: 30,
    },
    {
      name: "Introdução à Ciência dos Materiais",
      code: "FEMEC42031",
      requirementCode: "IQUFU49011",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Educação para o Meio Ambiente",
      code: "IGUFU49010",
      classHrs: 30,
      labHrs: 0,
      totalHrs: 30,
    },
  ],
  [
    {
      name: "Dinâmica",
      code: "FEMEC41040",
      requirementCode: "FEMEC41030",
      classHrs: 60,
      labHrs: 0,
      totalHrs: 60,
    },
    {
      name: "Materiais de construção Aeronáutica",
      code: "FEMEC43040",
      requirementCode: "FEMEC42031",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Mecânica dos Sólidos",
      code: "INFIS49040",
      requirementCode: "INFIS49032",
      classHrs: 75,
      labHrs: 15,
      totalHrs: 90,
    },
    {
      name: "Mét. Matemáticos Aplicados à Engenharia",
      code: "FAMAT49040",
      requirementCode: "FAMAT49030",
      classHrs: 75,
      labHrs: 0,
      totalHrs: 75,
    },
    {
      name: "Metrologia",
      code: "FEMEC41041",
      requirementCode: "FAMAT49021",
      classHrs: 30,
      labHrs: 30,
      totalHrs: 60,
    },
    {
      name: "Projeto aeronáutico assistido por computador",
      code: "FEMEC43041",
      requirementCode: "FAMAT41021",
      classHrs: 15,
      labHrs: 30,
      totalHrs: 45,
    },
    {
      name: "Processos de fabricação mecânica",
      code: "FEMEC42073",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
  ],
  [
    {
      name: "Estrutura de Aeronaves I",
      code: "FEMEC43050",
      requirementCode: "INFIS49040",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
    {
      name: "Cálculo Numérico",
      code: "FAMAT49050",
      requirementCode: "FAMAT49040",
      classHrs: 75,
      labHrs: 0,
      totalHrs: 75,
    },
    {
      name: "Mecânica dos Fluidos I",
      code: "FEMEC41050",
      requirementCode: "INFIS49030",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
    {
      name: "Vibração de sistemas mecânicos",
      code: "FEMEC41072",
      requirementCode: "FEMEC41040",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Eletrotécnica de Aeronaves",
      code: "FEMEC33051",
      requirementCode: "INFIS49030",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Termodinâmica Aplicada",
      code: "FEMEC41051",
      requirementCode: "FAMAT49040",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
  ],
  [
    {
      name: "Estruturas de Aeronaves II",
      code: "FEMEC43060",
      requirementCode: "FEMEC43050",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
    {
      name: "Sistemas Térmicos",
      code: "FEMEC41063",
      requirementCode: "FEMEC41051",
      classHrs: 60,
      labHrs: 0,
      totalHrs: 60,
    },
    {
      name: "Controle de Sist. Lineares",
      code: "FEMEC42060",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
    {
      name: "Transferência de Calor I",
      code: "FEMEC41060",
      requirementCode: "FEMEC41050",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
    {
      name: "Processos de Fab. Aeronáutica",
      code: "FEMEC41080",
      requirementCode: "FEMEC42073",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Mecânica dos Fluidos II",
      code: "FEMEC41062",
      requirementCode: "FEMEC41050",
      classHrs: 45,
      labHrs: 0,
      totalHrs: 45,
    },
    {
      name: "Dinâmica de estruturas aeronáuticas",
      code: "FEMEC43061",
      requirementCode: "FEMEC41072",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
  ],
  [
    {
      name: "Eletrônica de Aeronaves",
      code: "FEMEC33071",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
    {
      name: "Instrumentação",
      code: "FEMEC41070",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Sistemas de Aeronaves",
      code: "FEMEC43072",
      classHrs: 60,
      labHrs: 0,
      totalHrs: 60,
    },
    {
      name: "Transferência",
      code: "FEMEC41071",
      requirementCode: "FEMEC41060",
      classHrs: 60,
      labHrs: 0,
      totalHrs: 60,
    },
    {
      name: "Método de Elementos Finitos",
      code: "FEMEC43073",
      requirementCode: "FEMEC43060/FEMEC41060",
      classHrs: 30,
      labHrs: 30,
      totalHrs: 30,
    },
    {
      name: "Aerodinâmica Aplicada",
      code: "FEMEC42073",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
  ],
  [
    {
      name: "Cargas em aeronav e aeroelast",
      code: "FEMEC43080",
      requirementCode: "FEMEC43061",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
    {
      name: "Mecânica de vôo e controle de aeron",
      code: "FEMEC43081",
      requirementCode: "FEMEC42060",
      classHrs: 60,
      labHrs: 15,
      totalHrs: 75,
    },
    {
      name: "Homologação de Aeronaves",
      code: "FEMEC43082",
      classHrs: 30,
      labHrs: 0,
      totalHrs: 30,
    },
    {
      name: "Aerodinâmica Computacional",
      code: "FEMEC43082",
      requirementCode: "FEMEC43071",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Fadiga e Mecânica de fratura",
      code: "FEMEC43084",
      requirementCode: "FEMEC43060",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Projeto de Aeronaves I",
      code: "FEMEC43085",
      requiredHours: 2200,
      classHrs: 30,
      labHrs: 30,
      totalHrs: 60,
    },
    {
      name: "Propulsão de Aeronaves",
      code: "FEMEC43086",
      requirementCode: "FEMEC41063",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
  ],
  [
    {
      name: "Projeto de Aeronaves II",
      code: "FEMEC43090",
      requirementCode: "FEMEC43085",
      classHrs: 30,
      labHrs: 30,
      totalHrs: 60,
    },
    {
      name: "Manutenção de Aeronaves",
      code: "FEMEC43091",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Aeroacústica",
      code: "FEMEC43092",
      requirementCode: "FEMEC41062",
      classHrs: 45,
      labHrs: 15,
      totalHrs: 60,
    },
    {
      name: "Desempenho de Aeronaves",
      code: "FEMEC43093",
      classHrs: 45,
      labHrs: 0,
      totalHrs: 45,
    },
    {
      name: "Administração",
      code: "FAGEN49090",
      requiredHours: 1500,
      classHrs: 60,
      labHrs: 0,
      totalHrs: 60,
    },
    {
      name: "Economia",
      code: "IEUFU49090",
      requiredHours: 1500,
      classHrs: 60,
      labHrs: 0,
      totalHrs: 60,
    },
  ],
  [
    {
      name: "Projeto de Conclusão de curso",
      code: "FEMEC43100",
      requiredHours: 2200,
      classHrs: 30,
      labHrs: 0,
      totalHrs: 30,
    },
  ],
];

export const specialRequiredActivities = {
  requiredInternship: {
    name: "Estágio Obrigatório",
    code: "FEMEC42120",
    requiredHours: 2700,
    classHrs: 0,
    labHrs: 12,
    totalHrs: 12,
  },
  complementaryAcademicActivities: {
    name: "Atividades Acadêmicas Complementares",
    code: "FEMEC42110",
    min: 90,
  },
  humanityAndSocialScienceClasses: [
    {
      name: "Direito e Legislação",
      code: "FADIR49111",
      requiredHours: 1500,
      classHrs: 3,
      labHrs: 0,
      totalHrs: 3,
    },
    {
      name: "Ciências Sociais e Jurídicas",
      code: "FADIR49110",
      requiredHours: 1500,
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Direito Empresarial",
      code: "FADIR49112",
      requiredHours: 1500,
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
  ],
};

export default classes;

class ClassesMaped {
  values: Record<string, ClassItem>;
  requestedClassesMap?: Map<string, Array<string>>;

  constructor() {
    [this.values, this.requestedClassesMap] = this._init();
  }

  private _init(): [Record<string, ClassItem>, Map<string, Array<string>>] {
    let temp: Array<[string, ClassItem]> = [];
    classes.map((item: ClassItem[]) => {
      temp = temp.concat(
        item.map((classItem) => {
          return [classItem.code, classItem];
        })
      );
    });

    let requestedClassesMap = this._requestedClassesMap(temp);

    return [Object.fromEntries(temp), requestedClassesMap];
  }

  /**
   * Create a map of classes that is a required class
   * for some class in the curricular grade. The key
   * is the name of the class and the value is an
   * array of class names that has the respective class
   * as required or has a class that has a required class
   * linked to that class.
   */
  private _requestedClassesMap(
    entriesValues: Array<[string, ClassItem]>
  ): Map<string, Array<string>> {
    let temp = new Map();

    entriesValues.reverse().map(([key, classItem]: [string, ClassItem]) => {
      if (
        classItem.requirementCode === undefined ||
        classItem.requirementCode === null
      )
        return;

      let requirementCode = classItem.requirementCode.split("/");

      requirementCode.map((requiredItem) => {
        if (temp.get(classItem.code)) {
          if (temp.get(requiredItem)) {
            temp.set(
              requiredItem,
              temp
                .get(requiredItem)
                .concat(classItem.code, temp.get(classItem.code))
            );
          } else {
            temp.set(
              requiredItem,
              temp.get(classItem.code).concat(classItem.code)
            );
          }
        } else {
          if (temp.get(requiredItem)) {
            temp.set(
              requiredItem,
              temp.get(requiredItem).concat(classItem.code)
            );
          } else {
            temp.set(requiredItem, [classItem.code]);
          }
        }
      });
    });
    return temp;
  }
}

const classesMapped = new ClassesMaped();

export { classesMapped };
