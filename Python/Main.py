

print("---SELECT OPTION---")
print("---SELECT 1 TO INPUT INFORMATION---")
print("---SELECT 2 TO SHOW THE STOCK LIST---")
print("---SELECT 3 TO EXIT ---")


Stock = []
def PutStock():
    for i in range(2):
        InputStock = str(input(f"INPUT PRODUCT NAME :{i+1} "))
        InputQuantity = int(input(f"INPUT QUANTITY : "))
        Stock.append([InputStock,InputQuantity])


def StockList():
    for i in Stock:
        print(i)

    
while(True):
  
        Select = int(input("INPUT YOUR SELECTION = "))
        if Select == 1:
            PutStock()
        elif Select == 2:
            StockList()
        elif Select == 3:
            print("---EXITED---")
        else:
            print("Input again!!!")
           
   

