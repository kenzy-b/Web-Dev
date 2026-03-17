class Animal:
    def __init__(self, name, age, habitat):
        self.name = name
        self.age = age
        self.habitat = habitat

    def move(self):
        return "Animal is moving"

    def speak(self):
        return "Some sound"

    def __str__(self):
        return f"{self.name} ({self.age} years old)"


class Seal(Animal):
    def __init__(self, name, age, habitat, weight):
        super().__init__(name, age, habitat)
        self.weight = weight

    def speak(self): 
        return "Arf arf"

    def move(self):  
        return "Seal swims and slides on ice"

    def info(self):
        return f"Seal {self.name}, weight: {self.weight}kg"


class Shark(Animal):
    def __init__(self, name, age, habitat, teeth_count):
        super().__init__(name, age, habitat)
        self.teeth_count = teeth_count

    def speak(self):
        return "..."

    def move(self): 
        return "Shark swims fast"
 
    def info(self):
        return f"Shark {self.name}, teeth: {self.teeth_count}"