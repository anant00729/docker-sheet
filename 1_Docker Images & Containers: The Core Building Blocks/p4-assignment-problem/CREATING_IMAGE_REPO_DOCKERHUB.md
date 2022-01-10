## To create a repo on docker hub

get this 

```
docker push anant00729/node-hello-world-app:
```

To rename the docker image 

```
docker build -t anant00729/node-hello-world-app .
```

This will create the clone of the old image with different name:tag combination

```
docker tag node_img:latest anant00729/node-hello-world-app
```

Now we will push the anant00729/node-hello-world-app to the remote repo

```
docker push anant00729/node-hello-world-app
```

so right now I am not logged in 

to login 

```
docker login
```

To delete all the image 

```
docker image prune -a 
```

To logout 

```
docker logout
```

To pull the image from the docker hub

```
docker pull anant00729/node-hello-world-app
```

To run the image 

```
docker run anant00729/node-hello-world-app
```




