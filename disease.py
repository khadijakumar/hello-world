# open the dna file and create a table with it
dnafile = "DNA.txt"
f = open(dnafile,"r")
sequence = f.read() # read the file
print(sequence)
# create a function to translate DNA.txt using the amino acid translation table
def translate(x,y):
   codons ={
     'ATA':'I', 'ATC':'I', 'ATT':'I', 'ATG':'M', 
      'ACA':'T', 'ACC':'T', 'ACG':'T', 'ACT':'T', 
      'AAC':'N', 'AAT':'N', 'AAA':'K', 'AAG':'K', 
      'AGC':'S', 'AGT':'S', 'AGA':'R', 'AGG':'R',       'CTA':'L', 'CTC':'L', 'CTG':'L', 'CTT':'L', 
      'CCA':'P', 'CCC':'P', 'CCG':'P', 'CCT':'P', 
      'CAC':'H', 'CAT':'H', 'CAA':'Q', 'CAG':'Q', 
      'CGA':'R', 'CGC':'R', 'CGG':'R', 'CGT':'R', 
      'GTA':'V', 'GTC':'V', 'GTG':'V', 'GTT':'V', 
      'GCA':'A', 'GCC':'A', 'GCG':'A', 'GCT':'A', 
      'GAC':'D', 'GAT':'D', 'GAA':'E', 'GAG':'E', 
      'GGA':'G', 'GGC':'G', 'GGG':'G', 'GGT':'G', 
      'TCA':'S', 'TCC':'S', 'TCG':'S', 'TCT':'S', 
      'TTC':'F', 'TTT':'F', 'TTA':'L', 'TTG':'L', 
      'TAC':'Y', 'TAT':'Y', 'TAA':'_', 'TAG':'_', 
      'TGC':'C', 'TGT':'C', 'TGA':'_', 'TGG':'W',
      } 
 
 

   protien = ""
   if len(sequence) % 3 == 0:
       for x in range(0,len(sequence),3):
           out = sequence[x:x + 3]
           protien += codons[out]
   return(str(protien))
# create a function that that reads the dna file and opens two files for normal and mutated dna
def mutate(read1):
  with open("DNA.txt","r")as f:
      lines = f.readlines()
      for line in lines:
        splitline = line.split(":")
        addlist = []
        for add in splitline:
          addlist.append(add)

    
          fnormal = open("normalDNA.txt","w")
          for word in range(len(splitline[0])):
              if splitline[0][word] == "a":
                 splitline[0][word] == "A"
                 fnormal.write(str(splitline))
        
    
  
          fmutated = open("mutatedDNA.txt","w")
          for word in range(len(splitline[0])):
              if splitline[0] == "a":
                 splitline[0] = "T"
                 fmutated.write(str(splitline))
  f.close()      
  
# create a function that calls for the previouse functions and prints out the output
def txtTranslate():
  calltrans = translate("normalDNA.txt","mutatedDNA.txt")
  return(calltrans)
  
print(txtTranslate())