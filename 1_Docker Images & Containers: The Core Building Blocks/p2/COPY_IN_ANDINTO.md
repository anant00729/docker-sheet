### To copy in and into the container use 

use docker cp command

```
docker cp dummy/. container-name:/test
```

This will take all the files from the dummy folder and put it inside the test folder present in the conatiner.


To get back the same stuff use the following command

```
docker cp hopeful_zhukovsky:/test/. dummy/.
```

