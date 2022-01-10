### Delete the docker containers and images


It is important to stop the running container and then remove it.

```
docker rm 
```

```
docker ps -a
```

Will get this 

```
All container name
hopeful_leakey
sweet_gates
cool_cohen
quizzical_mcnulty
goofy_turing
thirsty_shirley
infallible_ritchie
brave_ride
competent_engelbart
awesome_babbage
sweet_shamir
nostalgic_mayer
flamboyant_swirles
upbeat_tereshkova
crazy_wright
exciting_bhabha
infallible_carson
trusting_ritchie
gifted_einstein
repo
```
### To delete multiple containers use 

```
docker rm hopeful_leakey  sweet_gates  cool_cohen  quizzical_mcnulty  goofy_turing  thirsty_shirley  infallible_ritchie
```

### To display the list of images use

This will also give us the size of image

```
docker images
```

```
IMAGE ID
4c8fc03c6bfa   
b82814350f60   
6037cabc4a9c   
a7745c867dea   
1883d1f73270   
76b0b8717914   
61aa22f2f006   
7e6cfbb07066   
0274200229e0   
0b0dff9f0b27   
4ee6a3b79e0c   
```
 

### To delete images use

rmi stands for remove image
```
docker rmi 4c8fc03c6bfa
```

It is important to remove the container first associated with an Image.
If we remove an Image that's been used for a container, then that Image will not get removed

### To remove unused images

use 

```
docker image prune
```

```
docker rm  brave_ride  competent_engelbart  awesome_babbage  sweet_shamir  nostalgic_mayer  flamboyant_swirles  upbeat_tereshkova  crazy_wright  exciting_bhabha  infallible_carson
```

```
docker rmi 4c8fc03c6bfa b82814350f60  6037cabc4a9c a7745c867dea 1883d1f73270 76b0b8717914 61aa22f2f006 7e6cfbb07066 0274200229e0   
```

### To remove the container after it finishes its execution use 

```
--rm flag to dp that
```

```
docker run -p 3000:80 -d --rm 68a6805f541f
```

### To get the information about the image 

```
docker images 
```

```
docker image inspect 68a6805f541f 
```



 


