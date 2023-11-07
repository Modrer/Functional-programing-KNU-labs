# Y Combinator in Python

Y=lambda f: (lambda x: f(x(x)))(lambda x: f(x(x)))

def addOne(x = 1):
  print(x)
  return x + 1

print(Y(addOne))