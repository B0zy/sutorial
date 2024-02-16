---
title: Basic Networking
author: Original Author k8woz
description: A tutorial for a basic implementation for s&box networking
date: '2023-4-14'
categories:
    - s&box
    - networking
published: true
---

## Basic Networking Implementation

To start create a new Empty GameObject, for the sake of organization we will rename it to
Network Manager. Next add the default NetworkHelper component to the GameObject you've just created.

By default, the NetworkHelper requires a prefab for the player and a few different SpawnPoints in the scene
in the form of GameObjects. Create a few more empty GameObjects to act as SpawnPoints and
drag them into the NetworkHelpers list of SpawnPoints.

### Creating the Player

Create a new GameObject ( for example a cube ) and give it a SkinnedModelRenderer Component, then create a new component we will name it PlayerNetworkComponent and add the following code.

```cs
public sealed class PlayerNetworkComponent : Component 
{
    [Sync][Property] int ColorIndex { get; set; } = 0;
    [Property] List<Color> Colors { get; set; }
    protected override void OnUpdate()
    {
        Components.Get<SkinnedModelRenderer>().Tint = Colors[ColorIndex];
        if ( IsProxy )
              return;
        if ( Input.Pressed( "Jump" ) )
             ColorIndex++;
        if ( ColorIndex + 1 >= Colors.Count )
             ColorIndex = 0; 
    }
}
```

The former Component is a simple player controller which will change the model's colour whenever the space bar is pressed. There are two key networking related parts to the Component you just viewed.
The `ColorIndex` value has a [`[Sync]`](https://docs.facepunch.com/s/sbox-dev/doc/sync-properties-jKFHwTGVgR) attribute. This allows for the value to be networked across all clients connected.

The Update function also checked for `IsProxy`. This value will be true if the GameObject currently being updated is owned by a different client or none at all. Details on ownership of GameObjects can be found [here](https://docs.facepunch.com/s/sbox-dev/doc/ownership-7rMV3FABuV).

Once the player has been set up, save it as a prefab and then place it into the NetworkHelper. You can now run the game in the editor and open a new instance to test the multiplayer.

## Documentation

A cheat sheet for networking can be found on the official [Facepunch docs](https://docs.facepunch.com/s/sbox-dev/doc/networking-multiplayer-kaVboe3yRD).