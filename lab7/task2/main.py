from models import Seal, Shark

seal = Seal("Muffin", 5, "Arctic", 120)
shark = Shark("Great White", 8, "Ocean", 300)

animals = [seal, shark]

for a in animals:
    print(a)            
    print(a.info())      
    print(a.move())       
    print(a.speak())      
    print("\n")