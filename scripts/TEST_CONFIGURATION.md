# Tests Configurations

1. Ramp up - Ramp down: load (i.e., the number of virtual users, or VUs) is gradually increased over a period of time. The purpose of a ramp-up period is to gradually increase the load on the system, rather than suddenly hitting it with a high load. 
Then we ramp down the load to see the normal behavior of an API (normal curve)

2. Longer steady state period: If you want to test how your system behaves under sustained load, you might consider increasing the duration of the steady state period. This can help identify issues like memory leaks that only become apparent over time.

3. Spike testing: If you want to test how your system handles sudden increases in traffic, you can add a stage where the number of virtual users (VUs) quickly increases to a high value and then quickly decreases.
 
4. Soak testing: If you want to test the endurance of your system, you can add a stage where the number of VUs stays at a high value for a long period of time.
hours

5. Step load testing: If you want to test how your system behaves as the load gradually increases, you can add multiple stages where the number of VUs incrementally increases.
5s
