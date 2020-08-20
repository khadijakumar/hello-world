#define price stay per day
per_night = 980     
#create a function
def hotel(num_days): 
  totalprice = (num_days)*(per_night) # calculate total price for entire stay
  return(totalprice)
numdays =int(input("how many days will you be staying with us?"))
print(str(hotel(numdays)))

# define function for 
def planecost(city): 
  #request user for input
    yourcity = input("enter the city you wish to travel \n")
    # provide options for user using if statemnts
    if yourcity == 'johannesburg':
        return 500
    elif yourcity == 'durban':
        return 350
    elif yourcity == 'capetown':
        return 222
    elif yourcity == 'nelspruit':
        return 475
    else:
        print("That destination has no airport")

#define cost of car hire per day
car_perday = 150
# create function for number of
def car(hired_days):
  total_car_cost = (car_perday)*(hired_days)
  return(total_car_cost)
#request user input
total = int(input("how many days do you want to hire the car?"))
print(str(car(total))) #print results

#create function for entire holiday cost
def holiday():
  destination = input("where is your destination")
  total_trip = hotel(numdays) + planecost(destination) + car(total)
  return("the total cost of the holiday is : " + str(total_trip))

print(holiday())