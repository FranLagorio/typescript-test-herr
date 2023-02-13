(() => {
  class Avenger {
    private name: string;
    public team: string;
    public realName?: string;
    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antMan: Avenger = new Avenger("AntMan", "Capitan");

  // console.log(antMan.avgAge);
  console.log(Avenger.avgAge);
})();
