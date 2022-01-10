###Dockerize BOTH apps - the Python and the Node app.


1) Create appropriate images for both apps (two separate images!).
HINT: Have a brief look at the app code to configure your images correctly!

2) Launch a container for each created image, making sure, 
that the app inside the container works correctly and is usable.

3) Re-create both containers and assign names to both containers.
Use these names to stop and restart both containers.

4) Clean up (remove) all stopped (and running) containers, 
clean up all created images.

5) Re-build the images - this time with names and tags assigned to them.

6) Run new containers based on the re-built images, ensuring that the containers
are removed automatically when stopped.


### 1. For node app

```
docker build .
```

```
docker images
```

```
docker run -p 3000:3000 -d --rm 0ce7ca7b2e6c
```

```
docker ps 
```

```
docker stop stoic_black
```

### 2. For python app

```
docker build .
```

```
docker images
```

```
docker run -it 6cf243180501
```

```
(1) Metric (m, kg) or (2) Non-Metric (ft, pounds)?
Please choose: 1
Please enter your height in meters
Your height: 170
Please enter your weight in kilograms
Your weight: 70
Your body-mass-index: 0.002422145328719723
```


### 3. Re-create both containers and assign names to both containers.

3.1 node app

```
docker images
```

```
docker image inspect 6cf243180501
```

This the node Image

```
docker image inspect 0ce7ca7b2e6c
```

```
docker run -p 3000:3000 -d --rm --name n_goals 0ce7ca7b2e6c
```


``` 
docker rmi 6cf243180501 0ce7ca7b2e6c faf894234ec2 68a6805f541f 0b0dff9f0b27
```


```
docker build --tag node_img:latest .
```

```
docker run -p 3000:3000 -d --rm node_img:latest
```

```
docker stop competent_euler  
```

```
docker run -p 3000:3000 -d --rm --name n_goals node_img:latest
```

```
docker stop n_goals
```

### All tasks are done!




