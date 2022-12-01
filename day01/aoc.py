from os import environ

with open('input.txt') as f:
    input = f.read()

inventories = [[int(c) for c in inventory.split('\n')] for inventory in input.split('\n\n')]
calories = sorted([sum(inventory) for inventory in inventories], reverse=True)

if environ.get('part') == 'part2':
    print(sum(calories[:3]))
else:
    print(calories[0])
