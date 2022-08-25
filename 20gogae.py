k=10
while(True):
    p=int(input())
    if k==p:
        print("같다")
        break
    elif k<p:
        print("니가말한게 크다")
        continue
    else:
        print("니가말한게 작다")
        continue